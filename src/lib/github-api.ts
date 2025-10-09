export interface GitHubRelease {
  tag_name: string;
  name: string;
  assets: Array<{
    name: string;
    browser_download_url: string;
  }>;
}

export interface ReleaseInfo {
  version: string;
  downloadUrl: string;
}

export async function fetchLatestRelease(
  owner: string,
  repo: string
): Promise<ReleaseInfo | null> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/releases/latest`
    );
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const release: GitHubRelease = await response.json();
    
    // Find the LogiSetup.exe asset
    const setupAsset = release.assets.find(asset => 
      asset.name === "LogiSetup.exe"
    );

    if (!setupAsset) {
      throw new Error("LogiSetup.exe not found in release assets");
    }

    return {
      version: release.tag_name,
      downloadUrl: setupAsset.browser_download_url,
    };
  } catch (error) {
    console.warn("Failed to fetch latest release:", error);
    return null;
  }
}