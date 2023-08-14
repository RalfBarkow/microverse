export type Quaternion = [number, number, number, number];
export type Vector3 = [number, number, number];
export type Vector2 = [number, number];
export type Matrix2 = [number, number, number, number];
export type Matrix3 = [number, number, number, number, number, number, number, number, number];
export type Matrix4 = [
    number, number, number, number,
    number, number, number, number,
    number, number, number, number,
    number, number, number, number
];

export type WorldcoreKernel = {
    slerp(a: number, b: number, t: number): number,
    v2_zero(): Vector2,
    v2_random(): Vector2,
    v2_magnitude(v: Vector2): number,
    v2_sqrMag(v: Vector2) : number,
    v2_normalize(v: Vector2): Vector2,
    v2_abs(v: Vector2): Vector2,
    v2_ceil(v: Vector2): Vector2,
    v2_floor(v: Vector2): Vector2,
    v2_inverse(v: Vector2): Vector2,
    v2_scale(v: Vector2, s: number): Vector2,
    v2_multiply(a: Vector2, b: Vector2),
    v2_divide(a: Vector2, b: Vector2);
    v2_rotate(v: Vector2, a: number): Vector2,
    v2_add(a: Vector2, b: Vector2): Vector2,
    v2_sub(a: Vector2, b: Vector2): Vector2,
    v2_dot(a: Vector2, b: Vector2): number,
    v2_min(a: Vector2, b: Vector2): Vector2,
    v2_max(a: Vector2, b: Vector2): Vector2,
    v2_angle(a: Vector2, b: Vector2): number,
    v2_signedAngle(a: Vector2, b: Vector2): number,
    v2_lerp(a: Vector2, b: Vector2, t: number): Vector2,
    v2_equals(a: Vector2, b: Vector2, e?: number): boolean,
    v2_isZero(v: Vector2): boolean,
    v2_distance(a: Vector2, b: Vector2): number,
    v2_distanceSqr(a: Vector2, b: Vector2): number,
    v2_manhattan(a: Vector2, b: Vector2): number,
    v2_transform(v: Vector2, m: Matrix2): Vector2,
    v2_perpendicular(v: Vector2) : Vector2,
    v2_closest(v: Vector2, p: Vector2): Vector2,

    v3_zero(): Vector3,
    v3_random(): Vector3,
    v3_magnitude(v: Vector3): number,
    v3_sqrMag(v: Vector3): number,
    v3_normalize(v: Vector3): Vector3,
    v3_inverse(v: Vector3): Vector3,
    v3_abs(v: Vector3): Vector3,
    v3_ceil(v: Vector3): Vector3,
    v3_floor(v: Vector3): Vector3,
    v3_scale(v: Vector3, s: number): number,
    v3_multiply(a: Vector3, b: Vector3): Vector3,
    v3_divide(a: Vector3, b: Vector3): Vector3,
    v3_rotateX(v: Vector3, a: number): Vector3,
    v3_rotateY(v: Vector3, a: number): Vector3,
    v3_rotateZ(v: Vector3, a: number): Vector3,
    v3_add(a: Vector3, b: Vector3): Vector3,
    v3_sub(a: Vector3, b: Vector3): Vector3,
    v3_dot(a: Vector3, b: Vector3): number,
    v3_cross(a: Vector3, b: Vector3): Vector3,
    v3_min(a: Vector3, b: Vector3): Vector3,
    v3_max(a: Vector3, b: Vector3): Vector3,
    v3_manhattan(a: Vector3, b: Vector3): number,
    v3_angle(a: Vector3, b: Vector3): number,
    v3_lerp(a: Vector3, b: Vector3, t: number): Vector3,
    v3_transform(a: Vector3, m: Matrix4): Vector3,
    v3_rotate(v: Vector3, q: Quaternion): Vector3,
    v3_equals(a: Vector3, b: Vector3, e?: number), boolean,
    v3_isZero(v: Vector3, b): boolean,
    v3_distance(a: Vector3, b: Vector3): number,
    v3_distanceSqr(a: Vector3, b: Vector3): number,

    m2_zero(): Matrix2
    m2_identity(): Matrix2,
    m2_rotation(angle: number): Matrix2,

    m4_zero(): Matrix4,
    m4_identity(): Matrix4
    m4_translation(v: Vector3): Matrix4,
    m4_getTranslation(m: Matrix4): Vector3,
    m4_scale(s: Vector3|number): Matrix4,
    m4_getScale(m: Matrix4): Vector3,
    m4_rotation(axis: Vector3, angle: number): Matrix4,
    m4_rotationX(a: number): Matrix4,
    m4_rotationY(a: number): Matrix4,
    m4_rotationZ(a: number): Matrix4,
    m4_rotationQ(q: Quaternion): Matrix4,
    m4_getRotation(m: Matrix4): Quaternion,
    m4_scaleRotationTranslation(s: Vector3|number, q: Quaternion, v: Vector3),
    m4_getScaleRotationTranslation(m: Matrix4): [Vector3, Quaternion, Vector3],
    m4_perspective(fov: number, aspect: number, near: number, far: number): Matrix4,
    m4_transpose(m: Matrix4): Matrix4,
    m4_determinant(m: Matrix4): number,
    m4_invert(m: Matrix4): Matrix4,
    m4_multiply(a: Matrix4, b: Matrix4): Matrix4,
    m4_toNormal4(m: Matrix4): Matrix4,

    q_identity(): Quaternion,
    q_magnitude(q: Quaternion): number,
    q_normalize(q: Quaternion): number,
    q_conjugate(q: Quaternion): Quaternion,
    q_invert(q: Quaternion): Quaternion,
    q_axisAngle(axis: Vector3, angle: number): Quaternion,
    q_toAxisAngle(quat: Quaternion): [Vector3, number],
    q_lookAt(f: Vector3, u: Vector3, t: Vector3): Quaternion,
    q_euler(x: number, y: number, z: number): Quaternion,
    q_eulerXYZ(x: number, y: number, z: number): Quaternion,
    q_pitch(q: Quaternion): number,
    q_yaw(q: Quaternion): number,
    q_roll(q: Quaternion): number,
    q_dot(q: Quaternion): number,
    q_multiply(a: Quaternion, b: Quaternion): Quaternion,
    q_slerp(a: Quaternion, b: Quaternion, t: number): Quaternion,
    q_equals(a: Quaternion, b: Quaternion, e?: number): boolean,
    q_isZero(q: Quaternion): boolean
};

export type THREE = typeof import("three");
export type MicroverseModule = {THREE: THREE} & WorldcoreKernel;
