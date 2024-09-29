import supabase from "@/utils/supabase";
export const getBooks = async () => {
    const { data: books, error } = await supabase.from('books').select('*').order('update_at',{ascending:false})

    if (error) {
        console.log(error)
        throw new Error('Error while getting list of books. Try again later')
    }
    return books
}

export const getBook = async (id) => {
    const { data: book, error } = await supabase.from('books').select('*').eq('id',id).single()

    if (error) {
        console.log(error)
        throw new Error('Error while getting book information. Try again later')
    }
    return book
}

export const addBooks = async (book) => {

    const { data, error } = await supabase
        .from('books')
        .insert([
            book,
        ])
        .select()

    if (error) {
        console.log(error)
        throw new Error('Error while adding books. Try again later')
    }
    return data
}

export const editBooks = async ({id,book}) => {
    
    const { data, error } = await supabase
        .from('books')
        .update(book)
        .eq('id', id)
        .select()

    if (error) {
        console.log(error)
        throw new Error('Error while adding books. Try again later')
    }
    return data
}




