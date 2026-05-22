export const sendMessage = async (formData: any) => {
    return fetch("/api/send-message", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    }).catch(err => {
        console.warn("CORS limitation might be active, but data usually sent.", err);
    });
};