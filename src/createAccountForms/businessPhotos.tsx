import { Box, Button, Image, Input, Stack, Text } from '@chakra-ui/react'
import ProgressBar from './progressBar'
import { useState } from 'react'
import Buttons from '../components/buttons'
import ImageUploading, { ImageListType } from 'react-images-uploading'
import React from 'react'
import Link from 'next/link'

const BusinessPhotos = () => {
  const [selectedImages, setSelectedImages] = useState<any[]>([])
  const [images, setImages] = React.useState([])
  const maxNumber = 1

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined,
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex)
    setImages(imageList as never[])
  }

  const onSelectFile = (event: any) => {
    const selectedFiles = event.target.files
    const selectedFilesArray = Array.from(selectedFiles)

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file as Blob | MediaSource)
    })

    setSelectedImages((previousImages) =>
      (previousImages as any[]).concat(imagesArray),
    )
  }

  return (
    <div>
      <Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
        >
          <Box w={['50%', '50%', '50%', '44%']}>
            <ProgressBar businessName="Ichiraku Ramen Arigato" width="60%" />

            <Text
              fontFamily="montserrat"
              fontWeight="500"
              fontSize="14px"
              color="#666670"
              mt="68px"
              mb="32px"
            >
              Welcome to hightable, complete the follow information to get fully
              setup.
            </Text>
          </Box>
          <Text
            fontFamily="montserrat"
            fontWeight="500"
            fontSize="16px"
            color="#666670"
            mb="16px"
          >
            Business Logo
          </Text>
          {/* <Box
            w="100px"
            h="100px"
            borderRadius="10px"
            border="1px solid #FF9916"
            position="relative"
          >
            <Box width="100%" h="100%">
              <label>
                <Box height="100px" borderRadius="10px" color="#ffffff">
                  <Image width="100%" height="100%" borderRadius="10px" />
                </Box>
              </label>
            </Box>

            <Box
              h="29px"
              w="29px"
              bg="#0055FF"
              borderRadius="10px"
              position="absolute"
              left="90%"
              bottom="-15%"
            ></Box>
          </Box> */}
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              <div className="upload__image-wrapper">
                <button
                  style={isDragging ? { color: 'red' } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <Box
                    w="100px"
                    h="100px"
                    borderRadius="10px"
                    border="1px solid #FF9916"
                    position="relative"
                  >
                    {imageList.map((image, index) => (
                      <Box
                        key={index}
                        className="image-item"
                        width="100px"
                        height="100px"
                      >
                        <Image
                          src={image.dataURL}
                          alt=""
                          width="100px"
                          height="100px"
                          borderRadius="10px"
                        />
                        <div className="image-item__btn-wrapper">
                          <Box
                            h="29px"
                            w="29px"
                            bg="#0055FF"
                            borderRadius="10px"
                            position="absolute"
                            left="90%"
                            bottom="-15%"
                            onClick={() => onImageUpdate(index)}
                          ></Box>
                          <Button
                            display="none"
                            onClick={() => onImageRemove(index)}
                          >
                            Remove
                          </Button>
                        </div>
                      </Box>
                    ))}
                  </Box>
                </button>
                &nbsp;
              </div>
            )}
          </ImageUploading>
        </Box>
        {/* BUSINESS PHOTOS */}
        <Box mt="94px">
          <Text
            fontFamily="montserrat"
            fontWeight="500"
            fontSize="16px"
            color="#666670"
            mb="16px"
            ml={['8%', '8%', '0%', '0%']}
          >
            Photos of your business
          </Text>
          <Box
            display={{
              sm: 'flex',
              md: 'block',
              lg: 'block',
              xl: 'block',
              base: 'flex',
            }}
            flexDirection={{
              sm: 'column',
              md: 'row',
              lg: 'row',
              xl: 'row',
              base: 'column',
            }}
            alignItems="center"
          >
            <Box ml={['8%', '8%', '0%', '0%']}>
              <Box display="flex" flexWrap="wrap">
                {selectedImages &&
                  selectedImages.map((image, index) => {
                    return (
                      <Box
                        key={image}
                        mr={['20px', '20px', '30px', '30px']}
                        mb="16px"
                      >
                        <Box height="77px" width="152px" display="flex">
                          <Image
                            src={image}
                            alt="upload"
                            w="100%"
                            borderRadius="10px"
                          />
                        </Box>

                        {/* <button
                          onClick={() =>
                            setSelectedImages(
                              selectedImages.filter((e) => e !== image),
                            )
                          }
                        >
                          delete image
                        </button>
                        <p>{index + 1}</p> */}
                      </Box>
                    )
                  })}
              </Box>
            </Box>

            <Box>
              <label>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  h="80px"
                  width="158px"
                  bg="#878787"
                  borderRadius="10px"
                  color="#ffffff"
                >
                  +
                  <br />
                  <span>Add New</span>
                </Box>
                <Box display="none">
                  <input
                    onChange={onSelectFile}
                    type="file"
                    name="images"
                    multiple
                    accept="image/png , image/jpeg, image/webp"
                  />
                </Box>
              </label>
            </Box>
            <Box mt="80px" w={['90%', '70%', '60%', '25%']}>
              <Link href="/businessspecialty">
                <Buttons
                  type="submit"
                  description="Go To Dashboard"
                  background="#FF9916"
                  color="#ffffff"
                  width="100%"
                  height="65px"
                  fontSize="14px"
                />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default BusinessPhotos
