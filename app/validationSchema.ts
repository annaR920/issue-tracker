import { z } from 'zod';

//Note: title and descriptions are attributes from the 'issue' model found in 'schema.prisma'.
//Below 'createIssueSchema' is the object used to validate a request.
export const createIssueSchema = z.object({
    title: z.string().min(1, 'Title is required').max(255),
    description: z.string().min(1, 'Description is required')
});
