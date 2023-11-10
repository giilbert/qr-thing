import { useState } from "react";
import QRCode from "react-qr-code";

export const App: React.FC = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div className="flex gap-2 flex-col max-w-md">
      <input
        type="url"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="font-mono border border-slate-600 p-2 outline-none focus:ring-2 ring-purple-600 ring-offset-2 rounded-sm"
      />

      <QRCode value={value} />
    </div>
  );
};
