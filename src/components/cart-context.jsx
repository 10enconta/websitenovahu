"use client"

import {
    createContext,
    useContext,
    useMemo,
    useState,
    useCallback,
} from "react"

const CartContext = createContext(null)

export function CartProvider({ children }) {
    const [items, setItems] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    const addItem = useCallback((producto) => {
        setItems((prev) => {
            const existente = prev.find((i) => i.id === producto.id)
            if (existente) {
                return prev.map((i) =>
                    i.id === producto.id
                        ? { ...i, cantidad: i.cantidad + 1 }
                        : i,
                )
            }
            return [...prev, { ...producto, cantidad: 1 }]
        })
        setIsOpen(true)
    }, [])

    const updateQty = useCallback((id, delta) => {
        setItems((prev) =>
            prev
                .map((i) =>
                    i.id === id ? { ...i, cantidad: i.cantidad + delta } : i,
                )
                .filter((i) => i.cantidad > 0),
        )
    }, [])

    const removeItem = useCallback((id) => {
        setItems((prev) => prev.filter((i) => i.id !== id))
    }, [])

    const clear = useCallback(() => setItems([]), [])

    const value = useMemo(() => {
        const totalItems = items.reduce((acc, i) => acc + i.cantidad, 0)
        const totalPrecio = items.reduce(
            (acc, i) => acc + i.cantidad * i.precio,
            0,
        )
        return {
            items,
            totalItems,
            totalPrecio,
            isOpen,
            setIsOpen,
            addItem,
            updateQty,
            removeItem,
            clear,
        }
    }, [items, isOpen, addItem, updateQty, removeItem, clear])

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
    const ctx = useContext(CartContext)
    if (!ctx) throw new Error("useCart debe usarse dentro de CartProvider")
    return ctx
}
