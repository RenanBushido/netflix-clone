'use server'

import { auth } from '@/auth'
import prisma from './utils/db'
import { revalidatePath } from 'next/cache'

export async function addTowatchlist(formData: FormData) {
  'use server'

  const movieId = formData.get('movieId')
  const pathname = formData.get('pathname') as string
  const session = await auth()

  await prisma.watchList.create({
    data: {
      userId: session?.user?.email as string,
      movieId: Number(movieId),
    },
  })

  revalidatePath(pathname)
}

export async function deleteFromWatchlist(formData: FormData) {
  'use server'

  const watchlistId = formData.get('watchlistId') as string
  const pathname = formData.get('pathname') as string

  await prisma.watchList.delete({
    where: {
      id: watchlistId,
    },
  })

  revalidatePath(pathname)
}
