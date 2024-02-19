import { z, defineCollection } from "astro:content"

const footerColumnTwoCollection = defineCollection({

	schema: z.object({

		live: z.boolean(),
		order: z.number(),
		title: z.string(),
        link: z.string()

	})

})
const footerColumnThreeCollection = defineCollection({

	schema: z.object({

		live: z.boolean(),
		order: z.number(),
		title: z.string(),
        link: z.string()

	})

})
const footerColumnFourCollection = defineCollection({

	schema: z.object({

		live: z.boolean(),
		order: z.number(),
		title: z.string(),
        link: z.string()

	})

})

export const collections = {

	"footer-column-two": footerColumnTwoCollection,
	"footer-column-three": footerColumnThreeCollection,
	"footer-column-four": footerColumnFourCollection

}
