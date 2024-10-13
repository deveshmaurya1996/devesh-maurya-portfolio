"use client";

import Button from "@/components/general/button";

const DownloadCV = () => {
  return (
    <Button
      onClick={() =>
        window?.open("/files/DeveshMauryaResume2024.pdf", "_blank")
      }
    >
      Download Resume
    </Button>
  );
};

export default DownloadCV;
