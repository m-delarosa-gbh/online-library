export async function apiRequest<T>(url: string, options: RequestInit = {}):Promise<T> {
    try {
        const response = await fetch(url, options)
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const contentType = response.headers.get("Content-Type") || "";

        if (contentType.includes("application/json")) {
            return (await response.json()) as T;
        } else if (contentType.includes("text/html") || contentType.includes("text/plain")) {
            return (await response.text()) as T;
        } else {
            return response as unknown as T; // fallback
        }

    } catch (error) {
        console.error("API request failed:", error.message);
        throw error; // re-lanzar para que el componente que lo use lo maneje
  }
}