const mapping: Record<string, string> = {
  designs: 'design',
  organizations: 'organization',
  projects: 'project',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
