import { useState } from 'react';
// @ts-ignore
import Parse from 'parse/dist/parse.min.js';

// Initialize Parse on the frontend (App ID and Javascript Key ONLY - NO MASTER KEY)
Parse.initialize(
    "CbRfjNpV0k4WXYuV6916ZPCPseDxPQiJOCK7HOdz",
    "6SoXtMQ0RXvRXIubPo2SvD3fgJC4MYvCi5FdZRwD"
);
Parse.serverURL = 'https://parseapi.back4app.com/';

export default function LoyaltyCheck() {
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState<{text: string, type: 'success' | 'reward' | 'error'} | null>(null);
    const [loading, setLoading] = useState(false);

    const handleCheckIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            // This calls the secure Cloud Function you set up in Back4App
            const result = await Parse.Cloud.run("processVisit", { phoneNumber: phone });

            if (result.status === "reward") {
                setMessage({ text: result.message, type: 'reward' });
            } else {
                setMessage({ text: result.message, type: 'success' });
            }
            setPhone('');
        } catch (error: any) {
            setMessage({ text: "Error: " + error.message, type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-spa-primary/30 max-w-md mx-auto">
            <h3 className="text-2xl font-serif text-spa-text mb-2 text-center">Acceso para Empleados</h3>
            <p className="text-gray-500 text-sm text-center mb-6">Ingresa el número de teléfono del cliente.</p>

            <form onSubmit={handleCheckIn} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Número de Teléfono</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Ej: 555-123-4567"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-spa-primary bg-spa-bg"
                        required
                        disabled={loading}
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-spa-text text-white py-3 rounded-lg hover:bg-black transition-colors font-medium disabled:opacity-50"
                >
                    {loading ? "Procesando..." : "Registrar Visita"}
                </button>
            </form>

            {message && (
                <div className={`mt-4 p-4 rounded-lg text-sm text-center font-medium ${
                    message.type === 'reward' ? 'bg-green-100 text-green-800 border border-green-200' :
                        message.type === 'success' ? 'bg-blue-50 text-blue-800 border border-blue-100' :
                            'bg-red-50 text-red-800 border border-red-100'
                }`}>
                    {message.text}
                </div>
            )}
        </div>
    );
}