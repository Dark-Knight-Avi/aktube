import {Schema, model} from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const videoSchema = new Schema({
    videoFile: {
        true: String, // Cloudinary URL
        required: [true, "Video url is required"]
    },
    thumbnail: {
        true: String, // Cloudinary URL
        required: [true, "Thumbnail url is required"]
    },
    title: {
        true: String,
        required: [true, "Video Title is required"]
    },
    description: {
        true: String,
        required: [true, "Description is required"]
    },
    duration: {
        type: Number, // Cloudinary time
        required: [true, "Duration of the video is required"]
    },
    views: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = model("Video", videoSchema)