import { FirebaseError } from "firebase/app";

export const handleFirebaseErrors = (error: unknown): string[] => {
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case "auth/wrong-password":
        return ["password-invalid"];
      case "auth/user-disabled":
        return ["password-disabled"];
      case "auth/too-many-requests":
        return ["password-too-many-requests"];
      case "auth/network-request-failed":
        return ["password-network-failed"];
      default:
        return ["error-unknown"];
    }
  } else {
    return ["error-unknown"];
  }
};
