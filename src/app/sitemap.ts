import { MetadataRoute } from "next";
import { createClient } from "@/lib/supabase/server";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://ishant.dev"; // Update with actual domain

    // Fetch project slugs from Supabase
    const supabase = await createClient();

    if (!supabase) {
        return [
            {
                url: baseUrl,
                lastModified: new Date(),
                changeFrequency: "monthly",
                priority: 1,
            }
        ];
    }

    const { data: projects } = await supabase.from("projects").select("slug, updated_at");

    const projectUrls = (projects || []).map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: project.updated_at ? new Date(project.updated_at) : new Date(),
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        ...projectUrls,
    ];
}
