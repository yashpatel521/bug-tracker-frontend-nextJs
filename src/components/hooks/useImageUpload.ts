import { useState, useRef } from "react";

export const useImageUpload = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [fileMeta, setFileMeta] = useState<{
    file: File | null;
    type: string;
    size: number;
  } | null>(null);
  const [dragging, setDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setFileMeta({ file, type: file.type, size: file.size });
    }
  };

  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setFileMeta({ file, type: file.type, size: file.size });
      if (fileInputRef.current) {
        fileInputRef.current.files = event.dataTransfer.files;
      }
    }
  };

  return {
    imagePreview,
    setImagePreview,
    dragging,
    fileInputRef,
    handleImageChange,
    handleFileInputClick,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  };
};
