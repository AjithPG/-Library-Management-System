import supabase from "@/utils/supabase";

export const getStudents = async () => {

    const { data: students, error } = await supabase.from('students').select('*')

    if (error) {
        console.log(error)
        throw new Error('Error while getting list of students. Try again later')
    }

    return students;

}


export const deleteStudent = async (id) => {


    const { data,error } = await supabase.from('students').delete().eq('id', id)


    if (error) {
        console.log(error)
        throw new Error('Error while deleting student. Try again later')
    }

    return data
}