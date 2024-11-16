import React from 'react';
import { FileText } from 'lucide-react';

interface DocumentPreviewProps {
  content: string;
  stampPaper?: boolean;
  stampValue?: string;
}

export default function DocumentPreview({ content, stampPaper, stampValue }: DocumentPreviewProps) {
  return (
    <div className="relative bg-white shadow-lg rounded-lg">
      {stampPaper && (
        <div className="absolute top-4 right-4 flex flex-col items-end">
          <div className="border-2 border-indigo-600 rounded px-3 py-1 text-sm font-medium text-indigo-600">
            Stamp Paper Value: ₹{stampValue}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <FileText className="h-4 w-4 mr-1" />
            E-Stamp
          </div>
        </div>
      )}
      <div className={`p-8 ${stampPaper ? 'mt-20' : ''}`}>
        <div className="max-w-3xl mx-auto font-serif">
          <pre className="whitespace-pre-wrap text-gray-800 leading-relaxed">
            {content}
          </pre>
        </div>
      </div>
    </div>
  );
}