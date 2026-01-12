const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

export const fetchStudents = async () => {
    const response = await fetch(`${BASE_URL}/students`);
    return response.json();
}

export const createStudent = async (student) => {
    const response = await fetch(`${BASE_URL}/students`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    });
    return response.json();
}

export const updateStudent = async (id, student) => {
    const response = await fetch(`${BASE_URL}/students/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    });
    return response.json();
}

export const deleteStudent = async (id) => {
    const response = await fetch(`${BASE_URL}/students/${id}`, {
        method: 'DELETE'
    });
    return response.json();
}