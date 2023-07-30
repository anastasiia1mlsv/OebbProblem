export async function postData() {
    const body = {
        "arrival_train_station": "Bruck an der Mur",
        "arrival_end_address": "B",
        "time_slot": "19:00 - 19:15",
    }
    try {
        let apiRequest = await fetch('http://igorche.pythonanywhere.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
            }
        );
        let response = await apiRequest.json();
    } catch (error) {
        console.error('error: ', error)
    }
}

