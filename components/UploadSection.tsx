'use client';

import { Upload, Image as ImageIcon, Loader2 } from 'lucide-react';
import { useState, useCallback } from 'react';

export function UploadSection() {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleProcess = useCallback(() => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 3000);
  }, []);

  return (
    <section className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Upload & Process</h2>
        <p className="text-muted">Drag and drop your image or click to browse</p>
      </div>

      {!uploadedImage ? (
        <div
          className={`upload-zone ${isDragging ? 'border-accent' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-accent bg-opacity-20 flex items-center justify-center">
              <Upload className="w-8 h-8 text-accent" />
            </div>
            <div>
              <p className="text-lg font-medium mb-2">Drop your image here</p>
              <p className="text-sm text-muted mb-4">or</p>
              <label className="btn-primary inline-flex items-center gap-2 cursor-pointer">
                <ImageIcon className="w-5 h-5" />
                Browse Files
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileSelect}
                />
              </label>
            </div>
            <p className="text-xs text-muted">Supports: JPG, PNG, WebP (Max 10MB)</p>
          </div>
        </div>
      ) : (
        <div className="glass-card p-6 rounded-lg space-y-6">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-surface">
            <img
              src={uploadedImage}
              alt="Uploaded"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted">Processing Cost</p>
              <p className="text-2xl font-bold">5 Credits</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setUploadedImage(null)}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={handleProcess}
                disabled={isProcessing}
                className="btn-primary flex items-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Upload className="w-5 h-5" />
                    Process Image
                  </>
                )}
              </button>
            </div>
          </div>

          {isProcessing && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted">Processing...</span>
                <span className="text-accent">67%</span>
              </div>
              <div className="h-2 bg-surface rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent transition-all duration-300"
                  style={{ width: '67%' }}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
