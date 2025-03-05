export interface UserData {
    firstName?: string
    lastName?: string
    companyName?: string
    email: string
    phone?: string
    userType: "customer" | "organizer" | "vendor"
    industry?: string
    preferences?: string[]
    vendorType?: "solo" | "company"
    service?: string
  }
  
  export interface LoginCredentials {
    email: string
    password: string
  }
  
  export interface RegistrationData extends LoginCredentials {
    userData: UserData
  }
  
  