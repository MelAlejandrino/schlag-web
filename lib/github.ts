export interface ReleaseAsset {
  name: string;
  browser_download_url: string;
}

export interface Release {
  tag_name: string;
  name: string;
  html_url: string;
  assets: ReleaseAsset[];
}

const GITHUB_API_URL =
  "https://api.github.com/repos/MelAlejandrino/Schlag/releases/latest";
const GITHUB_RELEASES_URL =
  "https://github.com/MelAlejandrino/Schlag/releases";

const WINDOWS_EXTENSIONS = [".exe", ".msi"];

export async function getLatestRelease(): Promise<Release> {
  const res = await fetch(GITHUB_API_URL, {
    headers: { Accept: "application/vnd.github+json" },
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`);
  }

  return res.json();
}

export function findWindowsAsset(release: Release): ReleaseAsset | undefined {
  return release.assets.find((asset) =>
    WINDOWS_EXTENSIONS.some((ext) => asset.name.toLowerCase().endsWith(ext))
  );
}

export function triggerDownload(url: string, filename: string) {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export function getFallbackUrl(): string {
  return GITHUB_RELEASES_URL;
}
