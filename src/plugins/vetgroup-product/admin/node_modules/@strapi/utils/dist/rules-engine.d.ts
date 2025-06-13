import jsonLogic from 'json-logic-js';
import { z } from 'zod';
export declare const ConditionSchema: z.ZodObject<{
    dependsOn: z.ZodString;
    operator: z.ZodEnum<["is", "isNot"]>;
    value: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>;
}, "strip", z.ZodTypeAny, {
    value: string | number | boolean;
    dependsOn: string;
    operator: "is" | "isNot";
}, {
    value: string | number | boolean;
    dependsOn: string;
    operator: "is" | "isNot";
}>;
export type Condition = z.infer<typeof ConditionSchema>;
export type JsonLogicCondition = jsonLogic.RulesLogic<jsonLogic.AdditionalOperation>;
export type RulesEngine = {
    generate: (condition: Condition) => JsonLogicCondition;
    validate: (condition: Condition) => void;
    evaluate: (condition: JsonLogicCondition, data: unknown) => boolean;
};
export declare function createRulesEngine(): RulesEngine;
//# sourceMappingURL=rules-engine.d.ts.map