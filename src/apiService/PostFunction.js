export async function postData(a, b, timeSlot) {
    const body = {
        "arrival_train_station": a,
        "arrival_end_address": b,
        "time_slot": timeSlot,
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
        console.log('if code 200 post successful: ', response)
    } catch (error) {
        console.error('error: ', error)
    }
}

