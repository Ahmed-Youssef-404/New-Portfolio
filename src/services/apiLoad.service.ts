export const sendMessage = async (formData: any) => {
    return fetch('https://script.google.com/macros/s/AKfycbxsyzY2oQHfrH0S2-chaFXcrOBRmmoo8MG_DjapWHsz9lXrtybASky6-muv2tNpl7U/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain;charset=utf-8', // جوجل يفضل هذا النوع أحياناً لتجنب Preflight
        },
        body: JSON.stringify(formData),
    }).catch(err => {
        console.warn("CORS limitation might be active, but data usually sent.", err);
    });
};