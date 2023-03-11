// it excludes null and undefined from the given type
type myType = string | number | null | undefined;
type noNulls = NonNullable<myType>

