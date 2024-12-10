#!/bin/bash

# Define variables
BUCKET_NAME="qtosol-bucket"
DISTRIBUTION_ID="EEDKWFO4RTFTT"  # Replace with your actual CloudFront distribution ID
BUILD_DIR="dist"  # Replace with 'build' if your build folder is named 'build'

# Step 1: Build the project
echo "Building the project..."
NODE_ENV=production npm run build || { echo "Build failed! Exiting..."; exit 1; }

# Step 2: Sync files to S3
echo "Syncing files to S3..."
aws s3 sync $BUILD_DIR s3://$BUCKET_NAME/dist --delete || { echo "S3 sync failed! Exiting..."; exit 1; }

# Step 3: Invalidate CloudFront cache
# echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/dist/*" || { echo "Saved in distfolder"; exit 1; }

echo "Deployment completed successfully!"
