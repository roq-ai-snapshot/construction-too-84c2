interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Logistics Manager', 'Admin'],
  tenantName: 'Company',
  applicationName: 'Construction tool rental v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage personal information',
    'Book tools for rental',
    'View tool details',
    'Manage rental logistics',
  ],
  ownerAbilities: [
    'Manage user',
    'Manage company',
    'Manage tool',
    'Manage rental',
    'Manage logistics',
    'Manage outlet',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/bd0efb03-3a20-4118-82a5-8a089cdd6649',
};
