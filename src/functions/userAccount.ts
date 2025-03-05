export interface UserAccount {
  userType: string
  email: string
  phone?: string
  firstName?: string
  lastName?: string
  companyName?: string
  businessName?: string
  businessType?: string
  industry?: string
  services?: string
  preferences: string[]
}

export const createUserAccount = (
  userType: string,
  email: string,
  additionalData: Record<string, any> = {},
): UserAccount => {
  return {
    userType,
    email,
    preferences: [],
    ...additionalData,
  }
}

export const updateUserType = (user: UserAccount, type: string): UserAccount => {
  return { ...user, userType: type }
}

export const updateContactInfo = (user: UserAccount, email: string, phone?: string): UserAccount => {
  return { ...user, email, phone }
}

export const updateBusinessInfo = (
  user: UserAccount,
  companyName?: string,
  businessName?: string,
  businessType?: string,
): UserAccount => {
  return { ...user, companyName, businessName, businessType }
}

export const updateIndustry = (user: UserAccount, industry: string): UserAccount => {
  return { ...user, industry }
}

export const updateServices = (user: UserAccount, services: string): UserAccount => {
  return { ...user, services }
}

export const updatePreferences = (user: UserAccount, preference: string): UserAccount => {
  const updatedPreferences = user.preferences.includes(preference)
    ? user.preferences.filter((p) => p !== preference)
    : [...user.preferences, preference]

  return { ...user, preferences: updatedPreferences }
}

