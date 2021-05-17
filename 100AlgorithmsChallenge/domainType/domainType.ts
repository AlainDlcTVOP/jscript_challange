export function domainType(domains: string[]): string[] {

    const domainType: string[] = [];

    for (let i = 0; i < domains.length; i++) {
        const domian = domains[i].split('.');
        const lastDomain = domian[domian.length - 1];

        if (lastDomain === 'org') {
            domainType.push('organization');
        }
        else if (lastDomain === 'com') {
            domainType.push('commercial');
        }
        else if (lastDomain === 'net') {
            domainType.push('network');
        }
        if (lastDomain === 'info') {
            domainType.push('information');
        }
    }

    return domainType;

}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));