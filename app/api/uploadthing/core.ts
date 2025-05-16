import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  serverImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(() => {
      return { userId: "unauthorized" };
    })
    .onUploadComplete(() => {}),
  messageFile: f(["image", "pdf"])
    .middleware(() => {
      return { userId: "unauthorized" };
    })
    .onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
