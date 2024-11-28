import React, { useState } from 'react';
import { Wand2, Loader } from 'lucide-react';
import { generateDocument } from '../services/documentService';

interface AIEditorProps {
  content: string;
  onUpdate: (newContent: string) => void;
}

export default function AIEditor({ content, onUpdate }: AIEditorProps) {
  const [loading, setLoading] = useState(false);
  const [instruction, setInstruction] = useState('');

  const aiActions = [
    { id: 'formal', label: 'Make More Formal', prompt: 'Make this document more formal and professional:' },
    { id: 'simple', label: 'Simplify Language', prompt: 'Simplify the language in this document:' },
    { id: 'expand', label: 'Add More Details', prompt: 'Expand this document with more detailed clauses:' },
    { id: 'legal', label: 'Add Legal Terms', prompt: 'Add standard legal terms and conditions to this document:' }
  ];

  const handleAIEdit = async (prompt: string) => {
    setLoading(true);
    try {
      const result = await generateDocument(`${prompt}\n\n${content}`);
      onUpdate(result);
    } catch (error) {
      console.error('AI editing failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCustomInstruction = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!instruction.trim()) return;
    await handleAIEdit(instruction);
    setInstruction('');
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {aiActions.map((action) => (
          <button
            key={action.id}
            onClick={() => handleAIEdit(action.prompt)}
            disabled={loading}
            className="inline-flex items-center px-3 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            <Wand2 className="h-4 w-4 mr-2" />
            {action.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleCustomInstruction} className="flex gap-2">
        <input
          type="text"
          value={instruction}
          onChange={(e) => setInstruction(e.target.value)}
          placeholder="Enter custom editing instruction..."
          className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        <button
          type="submit"
          disabled={loading || !instruction.trim()}
          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? <Loader className="animate-spin h-4 w-4" /> : <Wand2 className="h-4 w-4" />}
        </button>
      </form>
    </div>
  );
}