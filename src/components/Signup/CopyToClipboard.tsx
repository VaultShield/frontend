import { ContentCopy } from '@mui/icons-material';
import { toast } from 'sonner';

interface CopyToClipboardProps {
  words: string[];
}

const CopyToClipboard = ({ words }: CopyToClipboardProps) => {
  const handleCopyClipboard = () => {
    navigator.clipboard
      .writeText(words.join(', '))
      .then(() => {
        toast.success('Text copied to clipboard');
      })
      .catch((error) => {
        toast.error(`Error copying to clipboard: ${error}`);
      });
  };
  return (
    <div className="w-full px-10 ">
      <button
        onClick={handleCopyClipboard}
        className="bg-primary text-white h-12 w-full rounded-full font-semibold"
      >
        <ContentCopy />
        <span className="ml-3">Copy to clipboard</span>
      </button>
    </div>
  );
};

export default CopyToClipboard;
