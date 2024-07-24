import React from "react";
import Image from "next/image";

interface ImageUploadProps {
  imagePreview: string | null;
  dragging: boolean;
  fileInputRef: React.RefObject<HTMLInputElement>;
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileInputClick: () => void;
  handleDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  handleDragLeave: () => void;
  handleDrop: (event: React.DragEvent<HTMLDivElement>) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  imagePreview,
  dragging,
  fileInputRef,
  handleImageChange,
  handleFileInputClick,
  handleDragOver,
  handleDragLeave,
  handleDrop,
}) => (
  <div>
    <div
      className={`border-dashed cursor-pointer flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
        dragging ? "border-blue-500" : "border-gray-300"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleFileInputClick}
    >
      <input
        type="file"
        id="file"
        name="file"
        className="hidden"
        onChange={handleImageChange}
        ref={fileInputRef}
      />
      <p className="text-center">
        {imagePreview
          ? "Change Image"
          : "Drag and drop an image here or click to select"}
      </p>
    </div>
    {imagePreview && (
      <div className="mb-4 flex justify-center col-span-1 md:col-span-2">
        <Image
          src={imagePreview}
          alt="Profile Preview"
          className="h-32 w-32 object-cover rounded-full border"
          width={128}
          height={128}
        />
      </div>
    )}
  </div>
);

export default ImageUpload;
