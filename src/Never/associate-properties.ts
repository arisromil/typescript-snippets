// e.g. an object type that contains multiple associated properties is optional,
// but if any one of the properties is set, other associated properties must also be set.

type RequireAllOrNone<ObjectType, KeysType extends keyof ObjectType = never> = (
    | Required<Pick<ObjectType, KeysType>> // Require all of the given keys.
    | Partial<Record<KeysType, never>>
    ) & // Require none of the given keys.
    Omit<ObjectType, KeysType>; // The rest of the keys.
