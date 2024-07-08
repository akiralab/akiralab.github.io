import * as tf from "@tensorflow/tfjs";

let model: tf.LayersModel | null = null;

export const loadModel = async () => {
  try {
    const modelPath = "/models/mnist_model.json";
    console.log("Attempting to load model from:", modelPath);
    model = await tf.loadLayersModel(modelPath);
    console.log("Model loaded successfully");
  } catch (error) {
    console.error("Error loading model:", error);
    throw new Error("Model loading failed");
  }
};

export const inferenceMNIST = async (imageSrc: string) => {
  if (!model) {
    await loadModel();
  }

  const image = new Image();
  image.src = imageSrc;
  await new Promise((resolve) => (image.onload = resolve));

  const tensor = tf.browser
    .fromPixels(image, 1) // 1 for grayscale
    .resizeNearestNeighbor([28, 28])
    .toFloat()
    .div(tf.scalar(255.0))
    .expandDims(0)
    .expandDims(3);

  const startTime = performance.now();
  let predictions;
  try {
    predictions = model!.predict(tensor) as tf.Tensor;
    console.log("Inference output:", predictions);
  } catch (error) {
    console.error("Error running inference:", error);
    throw new Error("Inference failed");
  }
  const endTime = performance.now();

  const predictionArray = predictions.dataSync();
  const topPrediction = Array.from(predictionArray).indexOf(Math.max(...predictionArray));

  return [{ name: topPrediction.toString(), probability: 1.0 }, (endTime - startTime) / 1000];
};
