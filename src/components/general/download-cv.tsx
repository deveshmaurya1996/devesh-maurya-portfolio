"use client";

import Button from "@/components/general/button";

const DownloadCV = () => {
  return (
    <Button
      onClick={() =>
        window?.open("/files/DeveshMauryaResume-July-2025.pdf", "_blank")
      }
    >
      Download Resume
    </Button>
  );
};

export default DownloadCV;
