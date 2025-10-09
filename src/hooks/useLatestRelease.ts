import { useState, useEffect } from "react";
import { fetchLatestRelease, type ReleaseInfo } from "@/lib/github-api";

interface UseLatestReleaseOptions {
  owner: string;
  repo: string;
  fallbackVersion?: string;
  fallbackDownloadUrl?: string;
}

interface UseLatestReleaseReturn {
  version: string;
  downloadUrl: string;
  isLoading: boolean;
  error: string | null;
}

export function useLatestRelease({
  owner,
  repo,
  fallbackVersion = "v1.0.1",
  fallbackDownloadUrl = `https://github.com/${owner}/${repo}/releases/latest/download/LogiSetup.exe`,
}: UseLatestReleaseOptions): UseLatestReleaseReturn {
  const [releaseInfo, setReleaseInfo] = useState<ReleaseInfo>({
    version: fallbackVersion,
    downloadUrl: fallbackDownloadUrl,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadReleaseInfo = async () => {
      setIsLoading(true);
      setError(null);

      const latestRelease = await fetchLatestRelease(owner, repo);
      
      if (latestRelease) {
        setReleaseInfo(latestRelease);
      } else {
        setError("Could not fetch latest release data. Using fallback values.");
      }
      
      setIsLoading(false);
    };

    loadReleaseInfo();
  }, [owner, repo]);

  return {
    version: releaseInfo.version,
    downloadUrl: releaseInfo.downloadUrl,
    isLoading,
    error,
  };
}