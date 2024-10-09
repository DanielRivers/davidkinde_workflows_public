import { onUserTokenGeneratedEvent, getKindeAccessTokenHandle, WorkflowSettings, WorkflowTrigger } from "@kinde/infrastructure"

export const workflowSettings: WorkflowSettings = {
    id: "addAccessTokenClaim",
    trigger: WorkflowTrigger.UserTokenGeneration,
    // resetClaims: true,
    timeout: 10000,
    bindings: {
      console: {},
      "kinde.fetch": {},
      "kinde.idToken": {
        resetClaims: true,
      },
      "kinde.accessToken": {
        resetClaims: true,
      },
    },
  };
  
  export default {
    async handle(event: onUserTokenGeneratedEvent) {
      const accessToken = getKindeAccessTokenHandle<{ hello: string}>();
      accessToken.hello = "testing world";

      return "testing add user token claim";
    },
  };
  