export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            metrics: {
                Row: {
                    created_at: string | null
                    id: string
                    label: string
                    value: number
                }
                Insert: {
                    created_at?: string | null
                    id?: string
                    label: string
                    value: number
                }
                Update: {
                    created_at?: string | null
                    id?: string
                    label?: string
                    value?: number
                }
                Relationships: []
            }
            projects: {
                Row: {
                    created_at: string | null
                    demo_url: string | null
                    description: string | null
                    id: string
                    image_url: string | null
                    impact_stat: string | null
                    slug: string
                    tech_stack: string[] | null
                    title: string
                    updated_at: string | null
                }
                Insert: {
                    created_at?: string | null
                    demo_url?: string | null
                    description?: string | null
                    id?: string
                    image_url?: string | null
                    impact_stat?: string | null
                    slug: string
                    tech_stack?: string[] | null
                    title: string
                    updated_at?: string | null
                }
                Update: {
                    created_at?: string | null
                    demo_url?: string | null
                    description?: string | null
                    id?: string
                    image_url?: string | null
                    impact_stat?: string | null
                    slug?: string
                    tech_stack?: string[] | null
                    title?: string
                    updated_at?: string | null
                }
                Relationships: []
            }
            skills: {
                Row: {
                    category: string
                    created_at: string | null
                    id: string
                    name: string
                    proficiency: number | null
                }
                Insert: {
                    category: string
                    created_at?: string | null
                    id?: string
                    name: string
                    proficiency?: number | null
                }
                Update: {
                    category?: string
                    created_at?: string | null
                    id?: string
                    name?: string
                    proficiency?: number | null
                }
                Relationships: []
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}

export type Project = Database['public']['Tables']['projects']['Row'] & {
    context?: string;
    how?: string[];
    soWhat?: string;
};
export type Skill = Database['public']['Tables']['skills']['Row'];
export type Metric = Database['public']['Tables']['metrics']['Row'];
