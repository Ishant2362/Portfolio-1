'use server'

import { createClient } from '@/lib/supabase/server'
import { Project, Skill, Metric } from '@/types/supabase'
import { PROJECTS, DEFAULT_SKILLS, DEFAULT_METRICS } from '@/constants/seed-data'

export async function getFeaturedProjects(): Promise<{ data: Project[] | null; error: string | null }> {
    try {
        const supabase = await createClient()

        if (!supabase) {
            return { data: null, error: 'Supabase client could not be initialized. Check environment variables.' }
        }

        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(6)

        if (error || !data || data.length === 0) {
            return { data: PROJECTS, error: null }
        }

        return { data, error: null }
    } catch (err) {
        console.error('Unexpected error:', err)
        return { data: null, error: 'An unexpected error occurred while fetching projects.' }
    }
}

export async function getSkills(): Promise<{ data: Skill[] | null; error: string | null }> {
    try {
        const supabase = await createClient()

        if (!supabase) {
            return { data: null, error: 'Supabase client could not be initialized. Check environment variables.' }
        }

        const { data, error } = await supabase
            .from('skills')
            .select('*')
            .order('proficiency', { ascending: false })

        if (error) {
            console.error('Error fetching skills:', error.message)
            return { data: null, error: error.message }
        }

        return { data, error: null }
    } catch (err) {
        console.error('Unexpected error:', err)
        return { data: null, error: 'An unexpected error occurred while fetching skills.' }
    }
}

export async function getMetrics(): Promise<{ data: Metric[] | null; error: string | null }> {
    try {
        const supabase = await createClient()

        if (!supabase) {
            return { data: null, error: 'Supabase client could not be initialized. Check environment variables.' }
        }

        const { data, error } = await supabase
            .from('metrics')
            .select('*')

        if (error) {
            console.error('Error fetching metrics:', error.message)
            return { data: null, error: error.message }
        }

        return { data, error: null }
    } catch (err) {
        console.error('Unexpected error:', err)
        return { data: null, error: 'An unexpected error occurred while fetching metrics.' }
    }
}

export async function getProjectBySlug(slug: string): Promise<{ data: Project | null; error: string | null }> {
    try {
        const supabase = await createClient()

        if (!supabase) {
            return { data: null, error: 'Supabase client could not be initialized. Check environment variables.' }
        }

        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .eq('slug', slug)
            .single()

        if (error || !data) {
            const fallback = PROJECTS.find(p => p.slug === slug);
            return { data: fallback || null, error: null }
        }

        return { data, error: null }
    } catch (err) {
        console.error('Unexpected error:', err)
        return { data: null, error: 'An unexpected error occurred while fetching project.' }
    }
}
