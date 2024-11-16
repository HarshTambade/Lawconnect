import React, { useState } from 'react';
import { FileText, Loader, AlertCircle, Download, Copy, Check, Plus, Edit, Save, Eye, Wand2 } from 'lucide-react';
import { generateDocument } from '../services/documentService';
import { documentTemplates, Template } from '../data/documentTemplates';
import DocumentPreview from './DocumentPreview';
import AIEditor from './AIEditor';

export default function DocumentGenerator() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [documentType, setDocumentType] = useState('agreement');
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [editedContent, setEditedContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showAIEditor, setShowAIEditor] = useState(false);

  const documentTypes = [
    { id: 'agreement', name: 'Agreement' },
    { id: 'contract', name: 'Contract' },
    { id: 'letter', name: 'Legal Letter' },
    { id: 'notice', name: 'Legal Notice' },
    { id: 'policy', name: 'Policy Document' },
  ];

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template);
    setEditedContent(template.content);
    setResult('');
    setError(null);
    setShowPreview(false);
    setShowAIEditor(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setShowPreview(false);
    setShowAIEditor(false);
  };

  const handleSave = () => {
    setIsEditing(false);
    if (selectedTemplate) {
      setResult(editedContent);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) {
      setError('Please enter a description for the document you need');
      return;
    }

    setError(null);
    setResult('');
    setLoading(true);

    try {
      const response = await generateDocument(`Generate a ${documentType}: ${prompt}`);
      setResult(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate document');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    const textToCopy = result || editedContent;
    await navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const textToDownload = result || editedContent;
    const blob = new Blob([textToDownload], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedTemplate?.name || documentType}-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const togglePreview = () => {
    setShowPreview(!showPreview);
    if (!showPreview) {
      setIsEditing(false);
      setShowAIEditor(false);
    }
  };

  const toggleAIEditor = () => {
    setShowAIEditor(!showAIEditor);
    if (!showAIEditor) {
      setIsEditing(false);
      setShowPreview(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
        <div className="flex items-center mb-8">
          <div className="p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg shadow-lg">
            <FileText className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold ml-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Legal Document Generator
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Document Templates</h3>
            <div className="space-y-4">
              {Object.entries(
                documentTemplates.reduce((acc, template) => {
                  if (!acc[template.category]) {
                    acc[template.category] = [];
                  }
                  acc[template.category].push(template);
                  return acc;
                }, {} as Record<string, Template[]>)
              ).map(([category, templates]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">{category}</h4>
                  <div className="space-y-2">
                    {templates.map((template) => (
                      <button
                        key={template.id}
                        onClick={() => handleTemplateSelect(template)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                          selectedTemplate?.id === template.id
                            ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                            : 'hover:bg-gray-50 border-gray-200'
                        } border`}
                      >
                        <div className="font-medium">{template.name}</div>
                        <div className="text-sm text-gray-500">{template.description}</div>
                        {template.requiresStamp && (
                          <div className="mt-2 inline-flex items-center px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium">
                            Stamp Required: ₹{template.stampValue}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
                <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                <p className="ml-2 text-red-700">{error}</p>
              </div>
            )}

            {selectedTemplate ? (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">{selectedTemplate.name}</h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={togglePreview}
                      className={`inline-flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium ${
                        showPreview ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </button>
                    <button
                      onClick={toggleAIEditor}
                      className={`inline-flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium ${
                        showAIEditor ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Wand2 className="h-4 w-4 mr-2" />
                      AI Edit
                    </button>
                    {!showPreview && !showAIEditor && (
                      <>
                        {isEditing ? (
                          <button
                            onClick={handleSave}
                            className="inline-flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                          >
                            <Save className="h-4 w-4 mr-2" />
                            Save
                          </button>
                        ) : (
                          <button
                            onClick={handleEdit}
                            className="inline-flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                          >
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </button>
                        )}
                      </>
                    )}
                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 mr-2 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4 mr-2" />
                      )}
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                    <button
                      onClick={handleDownload}
                      className="inline-flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </button>
                  </div>
                </div>

                {showPreview ? (
                  <DocumentPreview
                    content={editedContent}
                    stampPaper={selectedTemplate.requiresStamp}
                    stampValue={selectedTemplate.stampValue}
                  />
                ) : showAIEditor ? (
                  <div className="space-y-4">
                    <AIEditor content={editedContent} onUpdate={setEditedContent} />
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
                        {editedContent}
                      </pre>
                    </div>
                  </div>
                ) : isEditing ? (
                  <textarea
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                    className="w-full h-[600px] px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-mono text-sm"
                  />
                ) : (
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 h-[600px] overflow-y-auto">
                    <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
                      {editedContent}
                    </pre>
                  </div>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Document Type
                  </label>
                  <select
                    value={documentType}
                    onChange={(e) => setDocumentType(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50"
                  >
                    {documentTypes.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="prompt">
                    Document Description
                  </label>
                  <textarea
                    id="prompt"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50"
                    rows={4}
                    value={prompt}
                    onChange={(e) => {
                      setPrompt(e.target.value);
                      setError(null);
                    }}
                    placeholder="Describe the document you need in detail..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center font-medium transition-all duration-200 shadow-lg"
                >
                  {loading ? (
                    <>
                      <Loader className="animate-spin h-5 w-5 mr-2" />
                      Generating Document...
                    </>
                  ) : (
                    'Generate Custom Document'
                  )}
                </button>
              </form>
            )}

            {result && !selectedTemplate && (
              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Generated Document:</h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 mr-2 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4 mr-2" />
                      )}
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                    <button
                      onClick={handleDownload}
                      className="inline-flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </button>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">{result}</pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}