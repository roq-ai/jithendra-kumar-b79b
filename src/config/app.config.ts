interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Developer', 'Designer', 'Administrator'],
  tenantName: 'Organization',
  applicationName: 'Jithendra Kumar',
  addOns: [],
};
