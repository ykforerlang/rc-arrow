export default function computeTransform({ degree = 90, offsetDegree }) {
    const hdeg = degree / 180 * Math.PI

    const m = Matrix.getRotateMatrix(0.25 * Math.PI)
    const kx = Math.cos(hdeg / 2) * Math.pow(2, 0.5)
    const ky = Math.sin(hdeg / 2) * Math.pow(2, 0.5)
    m.setScala(kx, ky)

    if (offsetDegree) {
        const hodeg = offsetDegree / 180 * Math.PI
        m.setRotate(hodeg)
    }

    const { a, b, c, d, e, f } = m
    return `matrix(${a}, ${b}, ${c}, ${d}, ${e}, ${f})`
}


class Matrix {
    a;b;c;d;e;f;

    static getRotateMatrix(hd) {
        const m = new Matrix()
        m.a = Math.cos(hd)
        m.b = Math.sin(hd)
        m.c = -Math.sin(hd)
        m.d = Math.cos(hd)
        m.e = 0
        m.f = 0
        return m
    }

    setScala(kx, ky) {
        const m = this
        m.a = m.a * kx
        m.b = m.b * ky
        m.c = m.c * kx
        m.d = m.d * ky
        m.e = m.e * kx
        m.f = m.f * ky
    }

    setRotate(hd) {
        const m = this
        const { a, b, c, d, e, f } = m
        const cosv = Math.cos(hd)
        const sinv = Math.sin(hd)

        m.a = cosv * a - sinv * b
        m.b = sinv * a + cosv * b
        m.c = cosv * c - sinv * d
        m.d = sinv * c + cosv * d
        m.e = cosv * e - sinv * f
        m.f = sinv * e + cosv * f
    }
}