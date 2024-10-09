import { onM2MTokenGeneratedEvent, WorkflowSettings, WorkflowTrigger } from "@kinde/infrastructure"

export const workflowSettings: WorkflowSettings = {
    id: "addM2MTokenClaim",
    trigger: WorkflowTrigger.M2MTokenGeneration,
    // resetClaims: true,
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
    async handle(event: onM2MTokenGeneratedEvent) {
      return "testing m2m tokens";
    },
  };
  