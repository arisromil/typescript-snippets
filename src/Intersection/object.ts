interface Point {
    x: number;
    y: number;
}

interface Named {
    name:string;
}

// intersected new object created
type PointNamed = Point & Named;
