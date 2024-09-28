export type License = {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
}

export type Owner = {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    html_url: string;
    type: string;
    site_admin: boolean;
}

export type Project = {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: Owner;
    html_url: string;
    description: string | null;
    fork: boolean;
    url: string;
    stargazers_count: number;
    watchers_count: number;
    language: string | null;
    has_issues: boolean;
    forks_count: number;
    license: License | null;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    default_branch: string;
}

export type GitApiResponse = {
    total_count: number;
    incomplete_results: boolean;
    items: Project[];
}
