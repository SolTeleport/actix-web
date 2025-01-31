// compiling some tests will trigger unused function warnings even though other tests use them
#![allow(dead_code)]

use std::io::{Read as _, Write as _};

pub mod gzip {
    use super::*;
    use flate2::{read::GzDecoder, write::GzEncoder, Compression};

    pub fn encode(bytes: impl AsRef<[u8]>) -> Vec<u8> {
        let mut encoder = GzEncoder::new(Vec::new(), Compression::fast());
        encoder.write_all(bytes.as_ref()).unwrap();
        encoder.finish().unwrap()
    }

    pub fn decode(bytes: impl AsRef<[u8]>) -> Vec<u8> {
        let mut decoder = GzDecoder::new(bytes.as_ref());
        let mut buf = Vec::new();
        decoder.read_to_end(&mut buf).unwrap();
        buf
    }
}

pub mod deflate {
    use super::*;
    use flate2::{read::ZlibDecoder, write::ZlibEncoder, Compression};

    pub fn encode(bytes: impl AsRef<[u8]>) -> Vec<u8> {
        let mut encoder = ZlibEncoder::new(Vec::new(), Compression::fast());
        encoder.write_all(bytes.as_ref()).unwrap();
        encoder.finish().unwrap()
    }

    pub fn decode(bytes: impl AsRef<[u8]>) -> Vec<u8> {
        let mut decoder = ZlibDecoder::new(bytes.as_ref());
        let mut buf = Vec::new();
        decoder.read_to_end(&mut buf).unwrap();
        buf
    }
}

pub mod brotli {
    use super::*;
    use ::brotli2::{read::BrotliDecoder, write::BrotliEncoder};

    pub fn encode(bytes: impl AsRef<[u8]>) -> Vec<u8> {
        let mut encoder = BrotliEncoder::new(Vec::new(), 3);
        encoder.write_all(bytes.as_ref()).unwrap();
        encoder.finish().unwrap()
    }

    pub fn decode(bytes: impl AsRef<[u8]>) -> Vec<u8> {
        let mut decoder = BrotliDecoder::new(bytes.as_ref());
        let mut buf = Vec::new();
        decoder.read_to_end(&mut buf).unwrap();
        buf
    }
}

pub mod zstd {
    use super::*;
    use ::zstd::stream::{read::Decoder, write::Encoder};

    pub fn encode(bytes: impl AsRef<[u8]>) -> Vec<u8> {
        let mut encoder = Encoder::new(Vec::new(), 3).unwrap();
        encoder.write_all(bytes.as_ref()).unwrap();
        encoder.finish().unwrap()
    }

    pub fn decode(bytes: impl AsRef<[u8]>) -> Vec<u8> {
        let mut decoder = Decoder::new(bytes.as_ref()).unwrap();
        let mut buf = Vec::new();
        decoder.read_to_end(&mut buf).unwrap();
        buf
    }
}
