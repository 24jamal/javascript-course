export const PI = 3.141592;

export function getAreaCircle(radius) {

    return PI * radius * radius;
}

export function getCircumCircle(radius) {
    return 2 * PI * radius;
}

export function getVolumeCircle(radius) {
    return ((4 / 3) * PI * radius * radius * radius);
}

