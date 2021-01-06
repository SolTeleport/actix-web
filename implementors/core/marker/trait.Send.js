(function() {var implementors = {};
implementors["actix_files"] = [{"text":"impl Send for Directory","synthetic":true,"types":[]},{"text":"impl !Send for Files","synthetic":true,"types":[]},{"text":"impl Send for NamedFile","synthetic":true,"types":[]},{"text":"impl Send for HttpRange","synthetic":true,"types":[]},{"text":"impl !Send for FilesService","synthetic":true,"types":[]}];
implementors["actix_http"] = [{"text":"impl Send for BodySize","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; !Send for ResponseBody&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl !Send for Body","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for BodyStream&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for SizedStream&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, S, X&nbsp;=&nbsp;ExpectHandler, U&nbsp;=&nbsp;UpgradeHandler&gt; !Send for HttpServiceBuilder&lt;T, S, X, U&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, U&gt; Send for Connector&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for ConnectError","synthetic":true,"types":[]},{"text":"impl Send for InvalidUrl","synthetic":true,"types":[]},{"text":"impl !Send for SendRequestError","synthetic":true,"types":[]},{"text":"impl Send for FreezeRequestError","synthetic":true,"types":[]},{"text":"impl Send for Protocol","synthetic":true,"types":[]},{"text":"impl Send for Connect","synthetic":true,"types":[]},{"text":"impl Send for KeepAlive","synthetic":true,"types":[]},{"text":"impl !Send for ServiceConfig","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Send for Decoder&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; !Send for Encoder&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl !Send for Extensions","synthetic":true,"types":[]},{"text":"impl Send for AcceptCharset","synthetic":true,"types":[]},{"text":"impl Send for Accept","synthetic":true,"types":[]},{"text":"impl Send for AcceptLanguage","synthetic":true,"types":[]},{"text":"impl Send for Allow","synthetic":true,"types":[]},{"text":"impl Send for CacheControl","synthetic":true,"types":[]},{"text":"impl Send for CacheDirective","synthetic":true,"types":[]},{"text":"impl Send for DispositionType","synthetic":true,"types":[]},{"text":"impl Send for DispositionParam","synthetic":true,"types":[]},{"text":"impl Send for ContentDisposition","synthetic":true,"types":[]},{"text":"impl Send for ContentLanguage","synthetic":true,"types":[]},{"text":"impl Send for ContentRange","synthetic":true,"types":[]},{"text":"impl Send for ContentRangeSpec","synthetic":true,"types":[]},{"text":"impl Send for ContentType","synthetic":true,"types":[]},{"text":"impl Send for Date","synthetic":true,"types":[]},{"text":"impl Send for ETag","synthetic":true,"types":[]},{"text":"impl Send for Expires","synthetic":true,"types":[]},{"text":"impl Send for IfMatch","synthetic":true,"types":[]},{"text":"impl Send for IfModifiedSince","synthetic":true,"types":[]},{"text":"impl Send for IfNoneMatch","synthetic":true,"types":[]},{"text":"impl Send for IfRange","synthetic":true,"types":[]},{"text":"impl Send for IfUnmodifiedSince","synthetic":true,"types":[]},{"text":"impl Send for LastModified","synthetic":true,"types":[]},{"text":"impl Send for HeaderMap","synthetic":true,"types":[]},{"text":"impl Send for ContentEncoding","synthetic":true,"types":[]},{"text":"impl Send for ExtendedValue","synthetic":true,"types":[]},{"text":"impl Send for ConnectionType","synthetic":true,"types":[]},{"text":"impl !Send for RequestHead","synthetic":true,"types":[]},{"text":"impl !Send for RequestHeadType","synthetic":true,"types":[]},{"text":"impl !Send for ResponseHead","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Send for Message&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S&nbsp;=&nbsp;Pin&lt;Box&lt;dyn Stream&lt;Item = Result&lt;Bytes, PayloadError&gt;&gt; + 'static, Global&gt;&gt;&gt; !Send for Payload&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;P&nbsp;=&nbsp;Pin&lt;Box&lt;dyn Stream&lt;Item = Result&lt;Bytes, PayloadError&gt;&gt; + 'static, Global&gt;&gt;&gt; !Send for Request&lt;P&gt;","synthetic":true,"types":[]},{"text":"impl&lt;B&nbsp;=&nbsp;Body&gt; !Send for Response&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl !Send for ResponseBuilder","synthetic":true,"types":[]},{"text":"impl&lt;T, S, B, X&nbsp;=&nbsp;ExpectHandler, U&nbsp;=&nbsp;UpgradeHandler&gt; !Send for HttpService&lt;T, S, B, X, U&gt;","synthetic":true,"types":[]},{"text":"impl !Send for Error","synthetic":true,"types":[]},{"text":"impl Send for ParseError","synthetic":true,"types":[]},{"text":"impl Send for PayloadError","synthetic":true,"types":[]},{"text":"impl !Send for DispatchError","synthetic":true,"types":[]},{"text":"impl Send for ContentTypeError","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Send for InternalError&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl !Send for ClientCodec","synthetic":true,"types":[]},{"text":"impl !Send for ClientPayloadCodec","synthetic":true,"types":[]},{"text":"impl !Send for Codec","synthetic":true,"types":[]},{"text":"impl&lt;T, S, B, X, U&gt; !Send for Dispatcher&lt;T, S, B, X, U&gt;","synthetic":true,"types":[]},{"text":"impl Send for ExpectHandler","synthetic":true,"types":[]},{"text":"impl !Send for Payload","synthetic":true,"types":[]},{"text":"impl&lt;T, S, B, X&nbsp;=&nbsp;ExpectHandler, U&nbsp;=&nbsp;UpgradeHandler&gt; !Send for H1Service&lt;T, S, B, X, U&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, S, B, X, U&gt; !Send for H1ServiceHandler&lt;T, S, B, X, U&gt;","synthetic":true,"types":[]},{"text":"impl Send for UpgradeHandler","synthetic":true,"types":[]},{"text":"impl&lt;T, B&gt; !Send for SendResponse&lt;T, B&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Message&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for MessageType","synthetic":true,"types":[]},{"text":"impl&lt;T, S, B&gt; !Send for Dispatcher&lt;T, S, B&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, S, B&gt; !Send for H2Service&lt;T, S, B&gt;","synthetic":true,"types":[]},{"text":"impl Send for Payload","synthetic":true,"types":[]},{"text":"impl !Send for TestRequest","synthetic":true,"types":[]},{"text":"impl Send for TestBuffer","synthetic":true,"types":[]},{"text":"impl !Send for TestSeqBuffer","synthetic":true,"types":[]},{"text":"impl Send for TestSeqInner","synthetic":true,"types":[]},{"text":"impl Send for Message","synthetic":true,"types":[]},{"text":"impl Send for Frame","synthetic":true,"types":[]},{"text":"impl Send for Item","synthetic":true,"types":[]},{"text":"impl Send for Codec","synthetic":true,"types":[]},{"text":"impl&lt;S, T&gt; !Send for Dispatcher&lt;S, T&gt;","synthetic":true,"types":[]},{"text":"impl Send for Parser","synthetic":true,"types":[]},{"text":"impl Send for OpCode","synthetic":true,"types":[]},{"text":"impl Send for CloseCode","synthetic":true,"types":[]},{"text":"impl Send for CloseReason","synthetic":true,"types":[]},{"text":"impl Send for ProtocolError","synthetic":true,"types":[]},{"text":"impl Send for HandshakeError","synthetic":true,"types":[]},{"text":"impl Send for Protocol","synthetic":true,"types":[]}];
implementors["actix_http_test"] = [{"text":"impl !Send for TestServer","synthetic":true,"types":[]}];
implementors["actix_multipart"] = [{"text":"impl Send for MultipartError","synthetic":true,"types":[]},{"text":"impl !Send for Multipart","synthetic":true,"types":[]},{"text":"impl !Send for Field","synthetic":true,"types":[]}];
implementors["actix_web"] = [{"text":"impl&lt;T, B&gt; !Send for App&lt;T, B&gt;","synthetic":true,"types":[]},{"text":"impl !Send for AppService","synthetic":true,"types":[]},{"text":"impl !Send for AppConfig","synthetic":true,"types":[]},{"text":"impl !Send for ServiceConfig","synthetic":true,"types":[]},{"text":"impl&lt;T:&nbsp;?Sized&gt; Send for Data&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for UrlGenerationError","synthetic":true,"types":[]},{"text":"impl Send for UrlencodedError","synthetic":true,"types":[]},{"text":"impl Send for JsonPayloadError","synthetic":true,"types":[]},{"text":"impl Send for PathError","synthetic":true,"types":[]},{"text":"impl Send for QueryPayloadError","synthetic":true,"types":[]},{"text":"impl Send for ReadlinesError","synthetic":true,"types":[]},{"text":"impl !Send for AnyGuard","synthetic":true,"types":[]},{"text":"impl !Send for AllGuard","synthetic":true,"types":[]},{"text":"impl Send for ConnectionInfo","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Compat&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Condition&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !Send for DefaultHeaders","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; !Send for ErrorHandlerResponse&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; !Send for ErrorHandlers&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl !Send for Logger","synthetic":true,"types":[]},{"text":"impl Send for TrailingSlash","synthetic":true,"types":[]},{"text":"impl Send for NormalizePath","synthetic":true,"types":[]},{"text":"impl Send for Compress","synthetic":true,"types":[]},{"text":"impl !Send for HttpRequest","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ReqData&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&nbsp;=&nbsp;ResourceEndpoint&gt; !Send for Resource&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl !Send for ResourceMap","synthetic":true,"types":[]},{"text":"impl !Send for Route","synthetic":true,"types":[]},{"text":"impl&lt;T&nbsp;=&nbsp;ScopeEndpoint&gt; !Send for Scope&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;F, I, S, B&gt; Send for HttpServer&lt;F, I, S, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !Send for ServiceRequest","synthetic":true,"types":[]},{"text":"impl&lt;B&nbsp;=&nbsp;Body&gt; !Send for ServiceResponse&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl !Send for WebService","synthetic":true,"types":[]},{"text":"impl !Send for TestRequest","synthetic":true,"types":[]},{"text":"impl Send for TestServerConfig","synthetic":true,"types":[]},{"text":"impl !Send for TestServer","synthetic":true,"types":[]},{"text":"impl&lt;A, B&gt; Send for Either&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, B&gt; !Send for EitherExtractError&lt;A, B&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Form&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !Send for FormConfig","synthetic":true,"types":[]},{"text":"impl&lt;U&gt; !Send for UrlEncoded&lt;U&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Json&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for JsonConfig","synthetic":true,"types":[]},{"text":"impl&lt;U&gt; !Send for JsonBody&lt;U&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Path&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for PathConfig","synthetic":true,"types":[]},{"text":"impl !Send for Payload","synthetic":true,"types":[]},{"text":"impl Send for PayloadConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Query&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for QueryConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Send for Readlines&lt;T&gt;","synthetic":true,"types":[]}];
implementors["actix_web_actors"] = [{"text":"impl&lt;A&gt; !Send for HttpContext&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !Send for WebsocketContext&lt;A&gt;","synthetic":true,"types":[]}];
implementors["awc"] = [{"text":"impl !Send for ClientBuilder","synthetic":true,"types":[]},{"text":"impl !Send for BoxedSocket","synthetic":true,"types":[]},{"text":"impl !Send for WsClientError","synthetic":true,"types":[]},{"text":"impl Send for JsonPayloadError","synthetic":true,"types":[]},{"text":"impl !Send for FrozenClientRequest","synthetic":true,"types":[]},{"text":"impl !Send for FrozenSendBuilder","synthetic":true,"types":[]},{"text":"impl !Send for ClientRequest","synthetic":true,"types":[]},{"text":"impl&lt;S&nbsp;=&nbsp;Pin&lt;Box&lt;dyn Stream&lt;Item = Result&lt;Bytes, PayloadError&gt;&gt; + 'static, Global&gt;&gt;&gt; !Send for ClientResponse&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; !Send for MessageBody&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S, U&gt; !Send for JsonBody&lt;S, U&gt;","synthetic":true,"types":[]},{"text":"impl !Send for SendClientRequest","synthetic":true,"types":[]},{"text":"impl !Send for TestResponse","synthetic":true,"types":[]},{"text":"impl !Send for WebsocketsRequest","synthetic":true,"types":[]},{"text":"impl !Send for Client","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()