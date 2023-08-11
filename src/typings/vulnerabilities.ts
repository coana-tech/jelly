import {AuditVulnerability, OpenSourceVulnerability} from "./osv";

/**
 * OSV entry, optionally augmented by code location or access path.
 */
export interface Vulnerability {
    osv: OpenSourceVulnerability | AuditVulnerability;
    location?: {
        link?: string;
        file: string;
        line?: number;
        code?: string;
    }
    patterns?: Array<string>;
}

export function getVulnerabilityId(v: Vulnerability): string {
    return 'id' in v.osv ? v.osv.id : v.osv.url;
}
